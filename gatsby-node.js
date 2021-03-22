exports.onCreatePage = ({ page, actions }) => {
    const { createPage } = actions
    console.log(page.path)

    if (page.path == "/") {
      page.context.layout = "home"
      console.log(page.context)
      createPage(page)
    }
  }