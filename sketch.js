class Walker {
	constructor() {
		this.x = 300;
		this.y = 300;
		this.beenHere = [];
		this.collisionDetected = false;
	}

	walk() {
		let choice = floor(random(4));

		if (choice == 0) {
			this.x = this.x + 1;
		}

		if (choice == 1) {
			this.x = this.x - 1;
		}

		if (choice == 2) {
			this.y = this.y + 1;
		}

		if (choice == 3) {
			this.y = this.y - 1;
		}

		this.beenHere.push({
			x: this.x,
			y: this.y
		});

	}

	detect() {
		this.beenHere.forEach((coordinate) => {
			if (coordinate.x == this.x || coordinate.y == this.y) {
				this.collisionDetected = true;
			} else {
				this.collisionDetected = false;
			}
		});
	}

	display() {
		if (this.collisionDetected == false) {
			point(this.x, this.y);
		} else return;
	}
}


let walker = new Walker();

function setup() {
	
	createCanvas(600, 600);
	background(255);
	strokeWeight(2);
}

function draw() {
	stroke(floor(random(0, 255)), floor(random(0, 255)), floor(random(0, 255)));

	walker.walk();
	walker.display();
}
