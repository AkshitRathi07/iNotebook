// User State handle karne ke liye (Login ke baad)
const [user, setUser] = useState({ name: "" });

const getUserData = async () => {
    const response = await fetch("https://inotebook-1fq3.onrender.com/api/auth/login", {
        method: 'POST',
        headers: { 'auth-token': localStorage.getItem('token') }
    });
    const json = await response.json();
    setUser({ name: json.name }); // Backend se naam set karein
}