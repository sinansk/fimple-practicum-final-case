import { ResultProvider } from "../context/ResultContext";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "../context/ThemeContext";
import { BrowserRouter } from "react-router-dom";
import App from "../App";
test("renders correctly", () => {
  render(
    <ThemeProvider>
      <ResultProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ResultProvider>
    </ThemeProvider>
  );
  const text = screen.getByText(/kredi/i);
  expect(text).toBeInTheDocument();
});
