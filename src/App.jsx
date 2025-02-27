import axios from "axios"
import { useState, useEffect } from "react"

function App() {

  const endpoint = "http://localhost:3000/posts"

  const [posts, setPosts] = useState ([])

  // facciamo la nostra chiamata al back end
  const fechPosts = () => {
    axios.get(endpoint)
    .then( res => setPosts (res.data))
  }

  return (
    <>
      <div className="container mt-5">
        <div
          className="table-responsive"
        >
          <table
            className="table table-primary"
          >
            <thead>
              <tr>
                <th scope="col">Column 1</th>
                <th scope="col">Column 2</th>
                <th scope="col">Column 3</th>
              </tr>
            </thead>
            <tbody>
              <tr className="">
                <td scope="row">R1C1</td>
                <td>R1C2</td>
                <td>R1C3</td>
              </tr>
              <tr class="">
                <td scope="row">Item</td>
                <td>Item</td>
                <td>Item</td>
              </tr>
            </tbody>
          </table>
        </div>


      </div>
    </>
  )
}

export default App
