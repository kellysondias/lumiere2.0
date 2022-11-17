import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../components/header/header";
import Home from "./Home";
import Movie from "./Movie";

export const AppRoutes = () => (
	<BrowserRouter>
		<Header />
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/movie/:id" element={<Movie />} />
		</Routes>
	</BrowserRouter>
);
