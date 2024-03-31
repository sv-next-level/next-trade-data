import { Test, TestingModule } from "@nestjs/testing";
import { AngeloneService } from "@/angelone/angelone.service";

describe("AngeloneService", () => {
  let service: AngeloneService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AngeloneService],
    }).compile();

    service = module.get<AngeloneService>(AngeloneService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
