"use client"

async function fetchAIContent() {
    const res = await fetch("/api/generate-content", {
        method: "POST"
    });
    const data = await res.json();
    console.log("AI Response:" ,data.text);
}

export default function AIRquest() {
    return (
        <div className="flex flex-col gap-4 border border-gray-200 rounded-xl p-4">
            <h2 className="text-2xl font-bold">AI Request</h2>
            <p className="text-sm text-muted-foreground">
                This is a simple example of how to make an AI request using the Google GenAI API.
            </p>
            <button
                onClick={fetchAIContent}
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            >
                Fetch AI Content
            </button>
        </div>
    );
}
