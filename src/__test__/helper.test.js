import { getStatusColor } from "../helper";

describe("getStatusColor function", () => {
  it('returns correct color for "To Do" status', () => {
    const color = getStatusColor("To Do");
    expect(color).toBe("#9b59b6");
  });

  it('returns correct color for "In Progress" status', () => {
    const color = getStatusColor("In Progress");
    expect(color).toBe("#2db7f5");
  });

  it('returns correct color for "Done" status', () => {
    const color = getStatusColor("Done");
    expect(color).toBe("#0a8080");
  });

  it("returns empty string for unknown status", () => {
    const color = getStatusColor("Unknown Status");
    expect(color).toBe("");
  });
});
