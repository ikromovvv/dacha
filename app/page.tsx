"use client"

import MovieGrid from "@/components/movie-grid";
import {useSelector} from "react-redux";
import {RootState} from "@/store/store";
import {useEffect} from "react";

export default function App() {


    useEffect(() => {
        localStorage.clear()
    } , [])

    return (
        <>

            <MovieGrid/>

            {/*<HomePage/>*/}
            {/*<MustWatch/>*/}

            {/*<Header/>*/}
            {/*<MainMenu />*/}
            {/*<SecureScreenWrapper>*/}
            {/*    <Router>*/}
            {/*        <Routes>*/}
            {/*            <Route path="/" element={<HomePage/>}/>*/}
            {/*            <Route path="/movie/:id" element={<MovieDetailPage/>}/>*/}
            {/*            <Route path="/mustwatch" element={<>dadasd</>}/>*/}
            {/*        </Routes>*/}
            {/*    </Router>*/}
            {/*</SecureScreenWrapper>*/}
        </>
    )
}
