import axios from "axios"
import { useNavigate } from "react-router-dom"
const CreatePost = () => {

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)

        axios.post("http://localhost:3000/create-post", formData)
        .then((res)=>{
            navigate("/feed")
            console.log(res)
            console.log(res.data)
            
        })
        .catch((err)=>{
            console.error(err)
            alert("Failed to create post.")
        })
    }
  return (
    <section className="create-post-section">
        <h1>Create Post</h1>

        <form onSubmit={handleSubmit}>
          <input type="file" name="image" accept="image/*" />
          <input type="text" placeholder="Enter Caption" name="caption" required />
          <button type="submit">Create Post</button>
        </form>
    </section>
  )
}

export default CreatePost
