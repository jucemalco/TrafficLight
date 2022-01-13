import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [selectedColor, setSelectedColor] = useState("yellow");
	//let selectedColor = "yellow";
	return (
		<div className="traffic-light">
			<div
				onClick={() => setSelectedColor("red")}
				className={
					"red " + (selectedColor === "red" ? "red-light" : " ")
				}></div>
			<div
				onClick={() => setSelectedColor("yellow")}
				className={
					"yellow " +
					(selectedColor === "yellow" ? "yellow-light" : "")
				}></div>
			<div
				onClick={() => setSelectedColor("green")}
				className={
					"green " + (selectedColor === "green" ? "green-light" : "")
				}></div>
		</div>
	);
}
