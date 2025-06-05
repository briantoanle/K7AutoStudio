# K7 AutoStudio Website Management Guide

Welcome to the K7 AutoStudio website! This guide will help you understand the project structure, how to manage content, and run the site.

## Project Overview

This website is built to showcase K7 AutoStudio's services, projects, and allow customers to book appointments.

**Technology Stack:**

*   **Next.js:** A React framework for building server-rendered and static web applications.
*   **React:** A JavaScript library for building user interfaces.
*   **TypeScript:** For static typing, improving code quality and maintainability.
*   **ShadCN UI:** A collection of re-usable UI components.
*   **Tailwind CSS:** A utility-first CSS framework for styling.
*   **Genkit:** (Setup for potential future AI features) An AI framework. Currently, no active AI features are implemented for users, but the groundwork is laid.

## Key Pages and Features

*   **Homepage (`/`):** Overview of services, featured projects, testimonials, and calls to action.
*   **Services (`/services`):** Detailed descriptions of window tinting and PPF services.
*   **Tint Comparison (`/services/tint-comparison`):** An interactive page allowing users to compare different window tint lines based on their properties (VLT, heat rejection, etc.).
*   **Gallery (`/gallery`):** A showcase of completed projects. Images and descriptions can be managed here.
*   **About Us (`/about`):** Information about K7 AutoStudio, its mission, and values.
*   **Contact (`/contact`):** Contact form, phone number, email, address, and map link.
*   **Book Appointment (`/book-appointment`):** A form for customers to request service appointments.

## Admin Area

*   **Access:** The admin area for uploading new projects to the gallery is located at `/admin/upload`.
*   **Functionality:** This page allows you to enter a project name, description, and upload an image for the gallery.
*   **Current Limitations:**
    *   This is a simplified admin page. **It does not currently have authentication.** In a production environment, this page MUST be protected by a login system to prevent unauthorized access.
    *   Image uploads are placeholders; a backend service would be needed to store and serve these images permanently.

## Content Management

Most of the website's text content, service details, project information (that isn't uploaded via the admin page), contact details, and testimonials are managed within a single file:

**`src/lib/constants.ts`**

To update content:

1.  **Open the file:** Navigate to `src/lib/constants.ts` in your code editor.
2.  **Locate the data:** The file contains clearly named constants for different sections of the site:
    *   `APP_NAME`: The name of your business.
    *   `NAV_LINKS`: For managing navigation menu items.
    *   `CONTACT_DETAILS`: Phone, email, address, map link, opening hours.
    *   `SERVICES_OFFERED`: Details for each service (name, description, icon, image, features).
    *   `TINT_LINES`: Data for the tint comparison page (name, VLT, heat rejection, etc.).
    *   `PROJECTS_DATA`: Initial project data for the gallery (new projects are typically added via `/admin/upload`).
    *   `ABOUT_US_CONTENT`: Mission, values, team intro.
    *   `TESTIMONIALS`: Customer quotes and authors.
3.  **Edit the values:** Change the text strings, numbers, or image URLs as needed.
    *   For placeholder images (`https://placehold.co/...`), ensure you update the `data-ai-hint` attribute on the `next/image` component in the respective page/component file if you want AI-assisted image suggestions later.
4.  **Save the file.**
5.  **Review changes:** If running locally, your website should auto-refresh. For deployed versions, you'll need to rebuild and redeploy.

**Managing Images:**

*   **Placeholder Images:** The site uses `https://placehold.co` for placeholder images. Replace these URLs with your actual image URLs once available.
*   **Image Hints:** Images often have a `data-ai-hint` attribute (e.g., `data-ai-hint="sedan tint"`). These hints are for potential future AI tools to help find suitable images. If you change an image, update its hint accordingly.
*   **Gallery Images:** New gallery images are intended to be uploaded via the `/admin/upload` page.

## Running the Website Locally

1.  **Install Dependencies:** If you haven't already, open your terminal in the project folder and run:
    ```bash
    npm install
    ```
2.  **Start the Development Server:**
    ```bash
    npm run dev
    ```
    This will typically start the website on `http://localhost:9002`.

## Building for Production

To create an optimized build of your website for deployment:

```bash
npm run build
```

This command compiles your Next.js application into static files and serverless functions ready for hosting.

## Future AI Features (Genkit)

The project includes Genkit, an AI framework. While no user-facing AI features are active by default, Genkit is configured in `src/ai/genkit.ts`. This setup allows for future integration of AI capabilities, such as:

*   AI-powered customer service responses.
*   Automated quote generation based on user input.
*   Analysis of uploaded images for service recommendations.
*   Content generation assistance.

The Genkit development server can be run with `npm run genkit:dev` if you start developing AI flows.

---

If you have any questions or need further assistance, please refer to the Firebase Studio documentation or seek help from your development partner.
