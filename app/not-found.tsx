import { CardContent, CardHeader, Card } from "@/components/ui/card";
import Link from "next/link";

export default function Component() {
  return (
    <section className="w-full h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="container grid gap-4 px-4 md:px-6 text-center">
        <Card className="w-full max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <CardContent className="p-4">
            <h1 className="text-3xl font-bold tracking-tighter mt-6">
              Oops! Page not found.
            </h1>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              We've searched high and low but couldn't find the page you're
              looking for.
            </p>
          </CardContent>
          <CardHeader className="p-4 border-t border-gray-200">
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-800 disabled:pointer-events-none disabled:opacity-50"
              href="/"
            >
              Back to Home
            </Link>
          </CardHeader>
        </Card>
      </div>
    </section>
  );
}
