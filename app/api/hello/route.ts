import { NextRequest, NextResponse } from "next/server";

/**
 * Example API route showing different HTTP methods
 * Access at: /api/hello
 */

// GET /api/hello
export async function GET(request: NextRequest) {
    // Example: Get query parameters
    const searchParams = request.nextUrl.searchParams;
    const name = searchParams.get("name") || "World";

    // Example: Return JSON response
    return NextResponse.json(
        {
            message: `Hello, ${name}!`,
            timestamp: new Date().toISOString(),
            method: "GET",
        },
        { status: 200 }
    );
}

// POST /api/hello
export async function POST(request: NextRequest) {
    try {
        // Example: Parse JSON body
        const body = await request.json();
        const { name, email } = body;

        // Example: Validate input
        if (!name || !email) {
            return NextResponse.json(
                { error: "Name and email are required" },
                { status: 400 }
            );
        }

        // Example: Process data (e.g., save to database)
        // const user = await db.user.create({ data: { name, email } });

        // Example: Return success response
        return NextResponse.json(
            {
                message: "User created successfully",
                data: { name, email },
                timestamp: new Date().toISOString(),
                method: "POST",
            },
            { status: 201 }
        );
    } catch (error) {
        console.error("Error in POST /api/hello:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}

// PUT /api/hello
export async function PUT(request: NextRequest) {
    try {
        const body = await request.json();
        const { id, name, email } = body;

        if (!id) {
            return NextResponse.json(
                { error: "ID is required for update" },
                { status: 400 }
            );
        }

        // Example: Update data
        // const user = await db.user.update({
        //     where: { id },
        //     data: { name, email }
        // });

        return NextResponse.json(
            {
                message: "User updated successfully",
                data: { id, name, email },
                timestamp: new Date().toISOString(),
                method: "PUT",
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error in PUT /api/hello:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}

// DELETE /api/hello
export async function DELETE(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const id = searchParams.get("id");

        if (!id) {
            return NextResponse.json(
                { error: "ID is required for deletion" },
                { status: 400 }
            );
        }

        // Example: Delete data
        // await db.user.delete({ where: { id } });

        return NextResponse.json(
            {
                message: "User deleted successfully",
                deletedId: id,
                timestamp: new Date().toISOString(),
                method: "DELETE",
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error in DELETE /api/hello:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}