import React from "react";
import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import Main from "../Main";
import Tools from "../Tools";
import ContactDetails, { ContactDetailsData } from "../ContactDetails";
import Introduction from "../Introduction";

afterEach(() => {
  cleanup();
});

describe("Layout styling", () => {
  const contactDetails: ContactDetailsData[] = [
    { lable: "Email", link: "mailto:test@example.com" },
    { lable: "Telegram", link: "https://t.me/example" },
  ];
  const aboutData = {
    location: "Astana",
    currentEmployment: { lable: "Cursor", link: "https://cursor.sh" },
    contactDetails,
    tools: [
      { lable: "Core", list: ["React", "TypeScript"] },
      { lable: "Design", list: ["Figma", "Framer"] },
    ],
  };

  it("keeps the main layout responsive with Tailwind classes", () => {
    render(
      <Main
        data={{ about: aboutData, posts: [] }}
        colorKey="one"
      />
    );

    const main = screen.getByRole("main");
    expect(main).toHaveClass("flex", "flex-col", "items-center");
    expect(main.className).toContain("max-w-[250px]");
    expect(main.className).toContain("phone:max-w-[300px]");
    expect(screen.getByAltText(/github/i).className).toContain("dark:invert");
  });

  it("renders the tools scroller with overflow handling", () => {
    render(<Tools data={aboutData.tools} />);

    const firstList = screen.getAllByRole("list")[0];
    const scrollRegion = firstList.parentElement as HTMLElement;
    expect(scrollRegion.className).toContain("overflow-x-auto");
    expect(scrollRegion.className).toContain("[&::-webkit-scrollbar]:hidden");
  });

  it("retains the contact item width and typography", () => {
    render(<ContactDetails data={contactDetails} />);

    const emailLink = screen.getByRole("link", { name: /email/i });
    expect(emailLink.className).toContain("min-w-[250px]");
    expect(emailLink.className).toContain("text-lg");
  });

  it("merges custom class names with Introduction defaults", () => {
    const { container } = render(
      <Introduction className="border border-black" colorKey="one" />
    );
    const root = container.firstChild as HTMLElement;
    expect(root.className).toContain("flex");
    expect(root.className).toContain("border border-black");
  });
});
