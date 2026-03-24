import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      phone,
      reservationType,
      roomType,
      adults,
      children,
      preferredFrom,
      preferredTo,
      description,
      consent,
      page_url,
      queryParams,
      premise,
    } = body;

    // Hardcoded location and dining option for Ember Castle Gokarna
    const location = "Ember Castle Gokarna";
    const diningOption = "Tulip";

    // Split name into first and last name
    const nameParts = name ? name.trim().split(" ") : [""];
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(" ") || "";

    // Construct the description/notes with all the booking details
    let details = `Reservation Type: ${reservationType}\nLocation: ${location}\n`;

    if (reservationType === "Room Booking" && roomType) {
      details += `Room Type: ${roomType}\n`;
    }

    if (reservationType === "Dining Reservation") {
      details += `Dining Option: ${diningOption}\n`;
    }

    details += `Guests: ${adults} Adults, ${children} Children\n`;

    if (preferredFrom || preferredTo) {
      details += `Dates: ${preferredFrom || ""} to ${preferredTo || ""}\n`;
    }

    details += `Consent: ${consent ? "Yes" : "No"}\n`;

    if (description) {
      details += `User Description: ${description}\n`;
    }

    const bookingDetails = details.trim();

    // Accelr Payload - Passing all fields
    const accelrPayload = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone: phone,
      location: location,
      reservation_type: reservationType,
      room_type: reservationType === "Room Booking" ? roomType : undefined,
      dining_option: reservationType === "Dining Reservation" ? diningOption : undefined,
      dates: preferredFrom || preferredTo ? `${preferredFrom} - ${preferredTo}` : undefined,
      adults: adults,
      children: children,
      consent: consent,
      source: "website", // Hardcoded or dynamic if passed
      page_url: page_url,
      description: description || undefined, // Original user description
      formatted_details: bookingDetails, // Keeping the formatted string just in case
      premise: premise,
      ...(queryParams || {}),
    };

    const webhookUrl = process.env.NEXT_PUBLIC_WEBHOOK_URL;

    // Only utilizing the Gokarna Script URL now
    const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL_GOKARNA;

    if (!webhookUrl) {
      console.error("Webhook URL not configured");
    }

    // Prepare promises for potential parallel execution
    const submissions = [];

    // 1. Submit to Webhook (Accelr)
    if (webhookUrl) {
      submissions.push(
        fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(accelrPayload),
        })
          .then((res) => {
            if (!res.ok) console.error("Webhook submission failed:", res.status, res.statusText);
            return res;
          })
          .catch((err) => console.error("Webhook fetch error:", err)),
      );
    }

    // 2. Submit to Google Apps Script (Original logic)
    if (scriptUrl) {
      // The original Google Script payload structure
      const googlePayload = {
        name,
        email,
        phone,
        location,
        reservationType,
        roomType,
        diningOption,
        adults,
        children,
        preferredFrom,
        preferredTo,
        description,
        consent,
        premise,
      };

      submissions.push(
        fetch(scriptUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(googlePayload),
        })
          .then((res) => {
            if (!res.ok) console.error("Google Script submission failed:", res.status, res.statusText);
            return res;
          })
          .catch((err) => console.error("Google Script fetch error:", err)),
      );
    }

    await Promise.all(submissions);

    // We return success if at least the process completed without crashing.
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error in submit-form API:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}