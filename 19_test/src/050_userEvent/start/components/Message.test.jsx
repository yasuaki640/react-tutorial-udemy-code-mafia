import { act, render, screen } from "@testing-library/react";
import Message from "./Message.jsx";
import userEvent from "@testing-library/user-event";

describe("<Message />", () => {
  describe("初期表示", () => {
    test("入力された文字が画面上に表示される", async () => {
      render(<Message />);
      const h2El = screen.getByRole("heading", { name: "入力された文字:" });
      expect(h2El).toBeInTheDocument();
    });

    test("入力値の変更 > 送信ボタン押下", async () => {
      render(<Message />);

      const inputEl = screen.getByRole("textbox");
      const btnEl = screen.getByRole("button", { name: "送信ボタン" });
      const h2El = screen.getByRole("heading", {
        name: "入力された文字:",
      });

      expect(btnEl).toBeDisabled();
      expect(inputEl.value).toBe("");

      await act(async () => {
        await userEvent.type(inputEl, "こんにちは");
      });

      expect(btnEl).not.toBeDisabled();

      await act(async () => {
        await userEvent.click(btnEl);
      });

      expect(h2El.textContent).toBe("入力された文字:こんにちは");
    });
  });
});
