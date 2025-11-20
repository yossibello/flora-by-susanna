import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    console.log('Received form data:', data);
    
    // Save to database
    const inquiry = await prisma.inquiry.create({
      data: {
        name: data.name || data.contactPerson || data.companyName || 'Ej angivet',
        email: data.email,
        phone: data.phone || null,
        inquiryType: data.inquiryType || data.serviceType || data.type || 'general',
        preferredDate: data.date || data.preferredDate || data.weddingDate || data.funeralDate || null,
        budget: data.budget || null,
        colors: data.colors || null,
        style: data.style || null,
        deliveryMethod: data.deliveryMethod || data.delivery || null,
        deliveryAddress: data.deliveryAddress || data.address || null,
        message: data.message || data.wishes || data.details || '',
        // Wedding specific
        weddingDate: data.weddingDate || null,
        venue: data.venue || null,
        guestCount: data.guestCount || null,
        // Funeral specific
        funeralDate: data.funeralDate || null,
        funeralType: data.funeralType || null,
        consultation: data.consultation || null,
        // Business specific
        companyName: data.companyName || data.company || null,
        contactPerson: data.contactPerson || null,
        serviceType: data.serviceType || data.service || null,
        deliveryInterval: data.deliveryInterval || null,
      },
    });

    // Prepare email content
    const emailSubject = `Ny beställning: ${data.inquiryType || data.type || 'Allmän förfrågan'} - ${data.name}`;
    
    let emailBody = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #8B956D; color: white; padding: 20px; text-align: center; }
    .content { background-color: #f9f9f9; padding: 20px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #8B956D; }
    .value { margin-left: 10px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Ny beställning från florabysusanna.se</h1>
    </div>
    <div class="content">
      <div class="field">
        <span class="label">Typ:</span>
        <span class="value">${data.inquiryType || data.serviceType || data.type || 'Allmän förfrågan'}</span>
      </div>
      <div class="field">
        <span class="label">Namn:</span>
        <span class="value">${data.name}</span>
      </div>
      <div class="field">
        <span class="label">E-post:</span>
        <span class="value">${data.email}</span>
      </div>
      ${data.phone ? `
      <div class="field">
        <span class="label">Telefon:</span>
        <span class="value">${data.phone}</span>
      </div>` : ''}
      ${data.date || data.preferredDate || data.weddingDate || data.funeralDate ? `
      <div class="field">
        <span class="label">Datum:</span>
        <span class="value">${data.date || data.preferredDate || data.weddingDate || data.funeralDate}</span>
      </div>` : ''}
      ${data.budget ? `
      <div class="field">
        <span class="label">Budget:</span>
        <span class="value">${data.budget}</span>
      </div>` : ''}
      ${data.colors ? `
      <div class="field">
        <span class="label">Färger:</span>
        <span class="value">${data.colors}</span>
      </div>` : ''}
      ${data.style ? `
      <div class="field">
        <span class="label">Stil:</span>
        <span class="value">${data.style}</span>
      </div>` : ''}
      ${data.deliveryMethod || data.delivery ? `
      <div class="field">
        <span class="label">Leverans:</span>
        <span class="value">${data.deliveryMethod || data.delivery}</span>
      </div>` : ''}
      ${data.deliveryAddress || data.address ? `
      <div class="field">
        <span class="label">Adress:</span>
        <span class="value">${data.deliveryAddress || data.address}</span>
      </div>` : ''}
      ${data.companyName || data.company ? `
      <div class="field">
        <span class="label">Företag:</span>
        <span class="value">${data.companyName || data.company}</span>
      </div>` : ''}
      ${data.venue ? `
      <div class="field">
        <span class="label">Plats:</span>
        <span class="value">${data.venue}</span>
      </div>` : ''}
      ${data.guestCount ? `
      <div class="field">
        <span class="label">Antal gäster:</span>
        <span class="value">${data.guestCount}</span>
      </div>` : ''}
      ${data.funeralType ? `
      <div class="field">
        <span class="label">Typ av arrangemang:</span>
        <span class="value">${data.funeralType}</span>
      </div>` : ''}
      ${data.consultation ? `
      <div class="field">
        <span class="label">Konsultation:</span>
        <span class="value">${data.consultation}</span>
      </div>` : ''}
      ${data.serviceType || data.service ? `
      <div class="field">
        <span class="label">Tjänst:</span>
        <span class="value">${data.serviceType || data.service}</span>
      </div>` : ''}
      ${data.deliveryInterval ? `
      <div class="field">
        <span class="label">Leveransintervall:</span>
        <span class="value">${data.deliveryInterval}</span>
      </div>` : ''}
      <div class="field">
        <span class="label">Meddelande:</span>
        <div style="margin-top: 10px; padding: 15px; background-color: white; border-left: 4px solid #8B956D;">
          ${(data.message || data.wishes || data.details || '').replace(/\n/g, '<br>')}
        </div>
      </div>
      <div style="margin-top: 20px; padding-top: 20px; border-top: 2px solid #8B956D;">
        <p><strong>Mottaget:</strong> ${new Date().toLocaleString('sv-SE')}</p>
        <p><strong>Förfrågnings-ID:</strong> ${inquiry.id}</p>
      </div>
    </div>
  </div>
</body>
</html>
    `;

    // Send email notification using Resend (Vercel-friendly)
    console.log('Attempting to send email via Resend...');
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);

      const resendFrom = process.env.RESEND_FROM || process.env.RESEND_FROM_EMAIL || `Flora by Susanna <onboarding@resend.dev>`;
      const notifyTo = process.env.EMAIL_USER || process.env.RESEND_TO_EMAIL || 'info@florabysusanna.se';

      console.log('Using resendFrom:', resendFrom, 'notifyTo:', notifyTo);

      const result = await resend.emails.send({
        from: resendFrom,
        to: notifyTo,
        subject: emailSubject,
        html: emailBody,
      });

      console.log('✅ Resend API response:', result);
      console.log(`Email sent successfully to ${notifyTo} via Resend`);
    } catch (emailError) {
      console.error('❌ Error sending email via Resend:', emailError);
      console.error('Full error details:', JSON.stringify(emailError, null, 2));
      // Email failed but data is saved in database - continue anyway
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Tack för din beställning! Vi återkommer inom 24 timmar.',
      inquiryId: inquiry.id 
    }, { status: 200 });

  } catch (error) {
    console.error('Error processing inquiry:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Ett fel uppstod. Vänligen försök igen eller kontakta oss direkt.' 
    }, { status: 500 });
  }
}
