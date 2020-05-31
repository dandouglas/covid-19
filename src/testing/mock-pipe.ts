import { Pipe } from '@angular/core';

export function mockPipe(options: Pipe): Pipe {
  const metadata: Pipe = {
    name: options.name
  };

  return (Pipe as any)(metadata)(class MockPipe {
      transform(s): string {
          return s;
      }
  });
}
