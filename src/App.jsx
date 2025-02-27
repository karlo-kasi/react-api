import axios from "axios"
import { useState, useEffect } from "react"

function App() {

  const endpoint = "http://localhost:3000/posts"

  const [posts, setPosts] = useState([])

  // facciamo la nostra chiamata al back end
  const fetchPosts = () => {
    axios.get(endpoint)
      .then((res) => setPosts(res.data))

  }

  useEffect(fetchPosts, [])


  return (
    <>
      <div className="container mt-5">
        <div className="table-responsive">
          <table className="table table-primary">
            <thead>
              <tr>
                <th scope="col">Column 1</th>
                <th scope="col">Column 2</th>
                <th scope="col">Column 3</th>
              </tr>
            </thead>
            <tbody>
              {
                posts.map((post) => {
                  const { id, title, image } = post
                  return (
                    <tr key={id}>
                      <td>{id}</td>
                      <td>{title}</td>
                      <td>{image}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>

      </div>
    </>
  )
}

export default App
