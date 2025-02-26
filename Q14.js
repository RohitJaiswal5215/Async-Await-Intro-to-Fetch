function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          resolve("Data fetched successfully!")
        } else {
          reject("Failed to fetch data.")
        }
      }, 1000)
    })
  }
  
  async function fetchDataHandler() {
    try {
      const result = await fetchData()
      console.log("Fetched data successfully!", result)
    } catch (error) {
      console.log("Error fetching data:", error)
    }
  }
  
  fetchDataHandler()