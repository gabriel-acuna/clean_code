interface Bird {
  eat(): void;
}
interface FlyBird {
  fly(): void;
}
interface RunnerBird {
  run(): void;
}

interface SwimmerBird {
  swim(): void;
}
class Tucan implements Bird, FlyBird {
  fly(): void {}
  eat(): void {}
}
class Humminbird implements Bird, FlyBird {
  fly(): void {}
  eat(): void {}
}

class Ostrich implements Bird, RunnerBird {
  eat(): void {}
  run(): void {}
}

class Penguin implements Bird, SwimmerBird {
  eat(): void {}
  swim(): void {}
}
