'use client';
// import Link from 'next/link';

const NotFound = () => {
    return (
        <html>
            <body className="flex h-screen flex-col items-center justify-center">
                <h1 className="mb-4 text-4xl font-semibold">Something went wrong!</h1>
                {/* <Link href="/" className="rounded-xl bg-blue-100 px-8 py-4 text-white">
                    Return to Home page
                </Link> */}
            </body>
        </html>
    );
};

export default NotFound;
