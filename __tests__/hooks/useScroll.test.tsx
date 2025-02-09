import { useScroll } from "@hooks/useScroll";
import { renderHook, act } from "@testing-library/react";
import {expect} from '@jest/globals';

describe("useScroll", () => {
  it("should responde to scroll events", () => {
    const { result } = renderHook(() => useScroll());

    expect(result.current).toBe(0);

    act(() => {
      window.scrollY = 100;
      window.dispatchEvent(new Event("scroll"));
    });

    expect(result.current).toBeTruthy();
  });
});
