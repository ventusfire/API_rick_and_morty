const resolveRoutes = (route) => {
    if (route.length <= 3) {
        let valitRoute = route === '/' ? route :'/:id' //los : son un if ternario
    }
    return `/${route}`
}
export default resolveRoutes;