'use server';

import { db } from "@/firebase/admin";
import { ca } from "zod/v4/locales";

export async function signUp(params: SignUpParams){
	const { uid, name, email } = params;
    try{
        const userRecord = await db.collection("users").doc(uid).get();
        if(userRecord.exists){
            return { success: false, message: "User already exists. Please sign in." };
        }
        await db.collection("users").doc(uid).set({
            name, email
        })
    }catch(error: any){
        console.error("Error signing up:", error);    
        if(error.code === 'auth/email-already-exists'){
            return { success: false, message: "Email already in use." };
        }
        return { success: false, message: "Failed to create an account." };
    }
    return { success: true };
}

