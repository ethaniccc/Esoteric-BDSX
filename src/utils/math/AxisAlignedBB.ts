import { Vector3 } from "./Vector3";

export class AxisAlignedBB {

    constructor(
        public min: Vector3,
        public max: Vector3
    ){}

    public clone(): AxisAlignedBB {
        return new AxisAlignedBB(this.min, this.max);
    }

    public expand(x: number = 0, y: number = 0, z: number = 0): AxisAlignedBB {
        this.min.subtract(x, y, z);
        this.max.add(x, y, z);
        return this;
    }

    public calculateXOffset(bb: AxisAlignedBB, x: number): number {
		if (bb.max.y <= this.min.y || bb.min.y >= this.max.y) {
			return x;
		}
		if (bb.max.z <= this.min.z || bb.min.z >= this.max.z) {
			return x;
		}
		if (x > 0 && bb.max.x <= this.min.x) {
			var x1 = this.min.x - bb.max.x;
			if (x1 < x) {
				x = x1;
			}
		} else if(x < 0 && bb.min.x >= this.max.x) {
			var x2 = this.max.x - bb.min.x;
			if (x2 > x) {
				x = x2;
			}
		}

		return x;
	}

    public calculateYOffset(bb: AxisAlignedBB, y: number): number {
        if (bb.max.x <= this.min.x || bb.min.x >= this.max.x) {
			return y;
		}
		if (bb.max.z <= this.min.z || bb.min.z >= this.max.z) {
			return y;
		}
		if (y > 0 && bb.max.y <= this.min.y) {
			var y1 = this.min.y - bb.max.y;
			if (y1 < y) {
				y = y1;
			}
		} else if(y < 0 && bb.min.y >= this.max.y) {
			var y2 = this.max.y - bb.min.y;
			if(y2 > y){
				y = y2;
			}
		}

		return y;
    }

}