export const getPosts = async () => {
    const response = await fetch("http://localhost/test_site/wordpress/wp-json/wp/v2/news?acf_format=standard")

    return await response.json()
}