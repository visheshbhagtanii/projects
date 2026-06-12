# Mental Health Counselling Practice Website

A professional Next.js website for Sonakshi Bhargava's mental health counselling practice.

## Technology Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Package Manager**: npm

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About therapist section
│   ├── AreasOfWork.tsx     # Specialties section
│   ├── TherapyServices.tsx # Services and pricing
│   ├── FAQ.tsx             # FAQ accordion
│   ├── Privacy.tsx         # Privacy policy section
│   ├── Contact.tsx         # Contact information
│   └── Footer.tsx          # Footer
├── public/                 # Static assets
└── package.json            # Dependencies
```

## Features

- **Responsive Design**: Mobile-first design that works on all devices
- **Professional Layout**: Clean, modern design for mental health services
- **Service Offerings**: Display of various therapy services with pricing
- **Interactive Components**: Expandable FAQ section
- **Contact Information**: Email and social media links
- **Accessibility**: Semantic HTML and proper color contrast

## Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/visheshbhagtanii/projects.git
cd projects
```

2. Install dependencies:
```bash
npm install
# or
npm install --legacy-peer-deps
```

3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Services Offered

The website displays 5 main service offerings:

1. **Individual Counselling (India)** - ₹1,499 for 50 minutes
2. **Individual Counselling (Overseas)** - $30 for 50 minutes
3. **Couple's Counselling** - ₹2,499 for 60 minutes
4. **Counselling Package** - ₹5,999 for 5 sessions (Best Value)
5. **Career Guidance** - ₹1,499 for 50 minutes

## Areas of Specialization

- Relationship Issues
- Anxiety & Depression
- Self-esteem
- Eating Disorders
- Emotional Regulation
- Young Adult Concerns

## Customization

### Colors
Update the color scheme by modifying Tailwind CSS classes in components.

### Content
Edit component files in the `components/` directory to update:
- Therapist information
- Service descriptions
- Pricing details
- Contact information

### Images
Replace the placeholder image area in the About section with actual therapist photo.

## Deployment

This project is set up to deploy on Vercel:

1. Push changes to GitHub
2. Connect the repository to Vercel
3. Vercel will automatically build and deploy

Alternatively, you can manually deploy:
```bash
npm run build
npm run start
```

## License

All rights reserved. © 2025 Sonakshi Bhargava.

## Contact

- Email: psychologistsonakshi@gmail.com
- Instagram: @mentalhealth.withsonakshi
