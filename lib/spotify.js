import SpotifyWebApi from "spotify-web-api-node";
// // "user-library-modify",
const scopes = [
    "user-read-email","playlist-read-private", "playlist-read-collaborative",
    "streaming", "user-read-private", "user-library-read",
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-library-modify",
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-follow-read","user-read-playback-position"
].join(',');



const params = {
    scopes: scopes
};

const queryParamsString = new URLSearchParams(params);

const LOGIN_URL = `https://accounts.spotify.com/authorize?${queryParamsString.toString()}`;

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
    clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
    
})

export default spotifyApi;

export { LOGIN_URL }