# Biz Dev Phil — Online Brand Strategist

This project is a marketing site for business owners who want clear online results. It is built with React and Vite and designed for deployment on Vercel.

## Features

- About, Services, Contact, Privacy, and Terms pages
- Dark and light themes with persistence
- Sticky navigation with smooth scrolling and section highlighting
- Service tabs with reusable cards
- Contact form with validation and honeypot anti-spam

## Getting Started

```bash
npm install
npm run dev
```

## Available Scripts

- `npm run dev` – Start the development server.
- `npm run build` – Build the production bundle.
- `npm run preview` – Preview the production build locally.
- `npm run lint` – Lint the project files.
- `npm run format` – Format the project files with Prettier.

## Deployment

Deploy the `project` directory using Vercel or your preferred hosting provider.

## EmailJS Setup (Contact Form)

This project supports client-side email sending with EmailJS.

1) Install SDK

```bash
npm install @emailjs/browser
```

2) Create EmailJS service and template

- Sign up at https://www.emailjs.com/
- Add an Email Service (e.g., Gmail, Outlook, or SMTP)
- Create a Template with variables you will pass from the form:
  - `from_name`
  - `from_email`
  - `reply_to` (used as reply-to email)
  - `message`
  - `name` (duplicate of `from_name` for legacy templates)
  - `email` (duplicate of `from_email` for legacy templates)

3) Configure environment variables

Create a `.env.local` file in `project/` with:

```
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
```

4) Spam protection

- A honeypot field (`company`) is already implemented and ignored by real users.
- If spam increases, consider adding Google reCAPTCHA (v2 Invisible or v3) and include its token in `templateParams`.

5) How it works

- The Contact form validates inputs and calls `emailjs.send(serviceId, templateId, params, publicKey)`.
- Status messages render inline for success and failure.
- In the EmailJS template settings, set the “Reply-To” field to `{{reply_to}}` so replying goes to the sender’s email.
- In the EmailJS template body include the placeholders for name and email, e.g. `Name: {{from_name}}` and `Email: {{from_email}}` (or `{{name}}` / `{{email}}`).
