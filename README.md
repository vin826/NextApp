# Next.js Capacitor App

This project is a mobile-friendly tournament application built with Next.js and Capacitor. It leverages the Aceternity UI for a seamless user experience across web and mobile platforms.

## Project Structure

```
nextjs-capacitor-app
├── app
│   ├── layout.tsx        # Defines the root layout of the Next.js application
│   └── page.tsx          # Serves as the main page of the application
├── capacitor.config.ts    # Configuration settings for Capacitor
├── next.config.js         # Configuration file for Next.js
├── package.json           # npm configuration file with dependencies
├── public
│   └── favicon.ico        # Favicon for the application
├── src
│   └── globals.css        # Global CSS styles for the application
├── tsconfig.json          # TypeScript configuration file
└── README.md              # Documentation for the project
```

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd nextjs-capacitor-app
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the Next.js application:**
   ```
   npm run dev
   ```

4. **Build the application for mobile:**
   ```
   npx cap add android
   npx cap add ios
   npx cap sync
   ```

5. **Open the project in your preferred IDE and run on a mobile device or emulator:**
   ```
   npx cap open android
   npx cap open ios
   ```

## Features

- Mobile-friendly design
- Built with Next.js for server-side rendering
- Integrated with Capacitor for mobile deployment
- Customizable layout and global styles

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.