import { ZenEngine } from "@gorules/zen-engine";
import fs from 'fs/promises';

const engine = new ZenEngine();

export const handler = async (data) => {
  const content = await fs.readFile('./company-analysys-overall.json');
  const decision = await engine.createDecision(content);
  const result = await decision.evaluate(data);
  console.log('result: ', result);
  return {
    statusCode: 200,
    body: result,
  };
};

handler({
  company: {
    turnover: 800000,
    type: "INC",
    country: "US",
  },
});
