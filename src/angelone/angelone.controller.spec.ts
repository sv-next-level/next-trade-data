import { Test, TestingModule } from "@nestjs/testing";
import { AngeloneController } from "@/angelone/angelone.controller";

describe("AngeloneController", () => {
  let controller: AngeloneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AngeloneController],
    }).compile();

    controller = module.get<AngeloneController>(AngeloneController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
