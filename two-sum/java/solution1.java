import java.util.HashMap;

public class TwoSum {

    public static int[] findTwoSum(int[] nums, int target) {
        if (nums.length < 2) {
            return null;
        }

        for (int i1 = 0; i1 < nums.length; i1++) {
            for (int i2 = i1 + 1; i2 < nums.length; i2++) {
                if (nums[i1] + nums[i2] == target) {
                    return new int[]{i1, i2};
                }
            }
        }
        return null;
    }

    public static void main(String[] args) {
        int[] indices = findTwoSum(new int[]{3, 1, 5, 7, 5, 9}, 10);
        if (indices != null) {
            System.out.println(indices[0] + " " + indices[1]);
        }
    }
}