import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "../components/footer/footer";
import Home from "./Home";
import Movie from "./Movie";

export const AppRoutes = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/movie/:id" element={<Movie />} />
		</Routes>
	</BrowserRouter>
);
