import { AlexaSkill, RequestTypes } from "jalexa";

const skillId = process.env.SKILL_ID!;

jest.setTimeout(10000);

describe("Basic skill test", () => {
  test("Can start a conversation", async () => {
    const skill = new AlexaSkill({
      skillId,
      askProfile: "default",
      locale: "en-US",
      stage: "development"
    });

    const response = await skill.speak("ask awesome cloud facts to tell me something about lambda");

    expect(response).toBeSuccessful();
    expect(response).toBeRequestType(RequestTypes.IntentRequest);
  });
});