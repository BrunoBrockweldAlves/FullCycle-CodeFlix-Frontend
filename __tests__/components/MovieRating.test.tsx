import { MovieRating } from "@components/MovieRating";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import React from "react";

describe("<MovieRating />", () => {
  it("should render without crashing", () => {
    render(<MovieRating rating="pg" />);
    expect(screen.getByText("pg")).toBeInTheDocument();
  });

  it("should display the correct rating", () => {
    render(<MovieRating rating="pg-13" />);
    expect(screen.getByText("pg-13")).toBeInTheDocument();
  });

  it("should render with the correct color", () => {
    render(<MovieRating rating="pg-13" />);
    expect(screen.getByText("pg-13")).toHaveClass("text-yellow-500");
  });
});


