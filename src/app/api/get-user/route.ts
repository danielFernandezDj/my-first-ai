/**
 * get-user/route.ts
 *
 * This file defines an API route for check if a user exists in the database.
 * It handles GET requests to the /api/get-user endpoint.
 * It retrieves the user ID from the request body and checks if a user with that ID exists in the database.
 */

import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authProviders";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }


    const user = await prisma.user.findUnique({
      where: {
        email: userEmail,
      },
    });

    if (!user) {
      return NextResponse.json({ exists: false }, { status: 200 });
    }
    return NextResponse.json({ exists: true }, { status: 200 });

  } catch (error) {
    console.error("Error retrieving session:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
