import { redirect } from 'react-router';
import appwriteConfig, { account, databases } from './client';
import { OAuthProvider, Query } from 'appwrite';

export const loginWithGoogle = async () => {
    try { 
        await account.createOAuth2Session(
            OAuthProvider.Google,
            'http://localhost:5174/dashboard', // Success redirect URL
            'http://localhost:5174/login'      // Failure redirect URL
        );
    } catch (e) {
        console.error('Error logging in with Google:', e);
    }
}

export const getUser = async () => {
    try { 
        const user = await account.get();

        if (!user) return redirect('/login');

        // Optional: If you have a users collection, fetch additional user data
        // const documents = await databases.listDocuments(
        //     appwriteConfig.databaseId,
        //     appwriteConfig.userCollectionId, // You'd need to add this to your config
        //     [
        //         Query.equal(attribute: 'accountId', value: user.$id),
        //     ]
                // [
                //     Query.select('name', 'email', 'imageUrl', 'joinedAt', 'accountId')
                // ]
        // );

        return user; // Return the user data
    } catch (e) {
        console.error('Error getting user:', e);
        return redirect('/login'); // Redirect on error
    }
}


export const logoutUser = async () => {
    try { 
        await account.deleteSession('current');
        return true;
    }catch (e) {
        console.error('Error logging out user:', e);
    }
}



export const getGooglePicture = async () => {
    try { 
        // First, get the current user's session to access the OAuth token
        const session = await account.getSession('current');
        
        if (!session || !session.providerAccessToken) {
            throw new Error('No active Google OAuth session found');
        }

        // Use Google People API to fetch user's profile picture
        const response = await fetch('https://people.googleapis.com/v1/people/me?personFields=photos', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${session.providerAccessToken}`,
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Google People API error: ${response.status}`);
        }

        const data = await response.json();
        
        // Extract the photo URL from the response
        if (data.photos && data.photos.length > 0) {
            // Get the highest resolution photo available
            const photoUrl = data.photos[0].url;
            return photoUrl;
        }

        return null; // No photo found
    } catch (e) {
        console.error('Error getting Google picture:', e);
        return null; // Return null on error
    }
}

export const storeUserData = async () => {
    try { 
        const user = await account.get(); // Get the user first
        
        if (!user) return null;
        
        // Check if user already exists in database
        const { documents } = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            [
                Query.equal('accountId', user.$id)
            ]
        );
        
        if (documents.length > 0) return documents[0];

        // Create new user if doesn't exist
        const newUser = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            'unique()', {
                accountId: user.$id,
                name: user.name,
                email: user.email,
                imageUrl: await getGooglePicture(),
                joinedAt: new Date().toISOString(),
            }
        );
        
        return newUser;
    } catch (e) {
        console.error('Error storing user data:', e);
        return null;
    }
}

export const getExistingUser = async () => {
    try { 

    }catch (e) {
        console.error('Error getting existing user:', e);
    }
}

// export const newUser = await databases.createDocument(
//     appwriteConfig.databaseId,
//     appwriteConfig.userCollectionId,
//     ID.unique(), {
//         accountId: user.$id,
//         name: user.name,
//         email: user.email,
//         imageUrl: await getGooglePicture(),
//         joinedAt: new Date().toISOString(),
//     }
// )

