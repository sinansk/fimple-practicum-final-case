import { fireEvent, render, screen } from "@testing-library/react";
import { ResultProvider } from "../context/ResultContext";
import UserForm from "../components/UserForm";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

test("renders form correctly", () => {
  render(
    <ResultProvider>
      <UserForm />
    </ResultProvider>
  );
  const form = screen.getByTestId("form");
  expect(form).toBeInTheDocument();
});

test("renders ipnut correctly", () => {
  render(
    <ResultProvider>
      <UserForm />
    </ResultProvider>
  );
  const loanInput = screen.getByPlaceholderText(/100.000/);
  const testValue = "1000";
  fireEvent.change(loanInput, { target: { value: testValue } });
  expect(loanInput.value).toBe("1.000");
});

test("paymentPeriod value is true", () => {
  render(
    <ResultProvider>
      <UserForm />
    </ResultProvider>
  );
  const paymentPeriodInput = screen.getByTestId("paymentPeriodInput");
  expect(paymentPeriodInput.value).toBe("1");
  fireEvent.change(paymentPeriodInput, { target: { value: 7 / 30 } });
  expect(paymentPeriodInput.value).toBe("0.23333333333333334");
});
