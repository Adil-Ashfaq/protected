import React from "react";
import Card from "../../component/card/Card"
import Nav from "../../component/nav/Nav"

export default function Home() {
    return (
        <div>
            <Nav />
            <h1 className="my-2 text-center">cards</h1>
            <Card />
        </div>
    );
}
