import Prompt from "@/models/prompt";
import { connectToDB } from "@/utils/database";

export const GET = async (request, { params }) => {
    try {
        await connectToDB()

        const prompt = await Prompt.findById(params.id).populate("creator")
        if (!prompt) return new Response("Post Not Found", { status: 404 });

        return new Response(JSON.stringify(prompt), { status: 200 })

    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
}

export const PATCH = async (request, { params }) => {
    const { title, prompt, tag, imagePath, link, createdDate } = await request.json();

    try {
        await connectToDB();

        // Find the existing prompt by ID
        const existingPrompt = await Prompt.findById(params.id);

        if (!existingPrompt) {
            return new Response("Post not found", { status: 404 });
        }

        // Update the prompt with new data
        existingPrompt.title = title;
        existingPrompt.prompt = prompt;
        existingPrompt.tag = tag;
        existingPrompt.imagePath = imagePath;
        existingPrompt.link = link;
        existingPrompt.createdDate = createdDate;
        

        await existingPrompt.save();

        return new Response("Successfully updated the Post", { status: 200 });
    } catch (error) {
        return new Response("Error Updating Post", { status: 500 });
    }
};

export const DELETE = async (request, { params }) => {
    try {
        await connectToDB();

        // Find the prompt by ID and remove it
        await Prompt.findByIdAndRemove(params.id);

        return new Response("Post deleted successfully", { status: 200 });
    } catch (error) {
        return new Response("Error deleting Post", { status: 500 });
    }
};
