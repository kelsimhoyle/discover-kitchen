exports.onCreatePage = ({ page }) => {

    if (page.path == "/") {
      page.context.layout = "home"
    }
  }