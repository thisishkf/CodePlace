import java.util.HashMap;

public class TwoSum {

    public static int[] findTwoSum(int[] nums, int target) {
        if (nums.length < 2) {
            return null;
        }

        HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();
        for (int i = 0; i < nums.length; i++) {
            if (map.containsKey(nums[i])) {
                return new int[]{map.get(nums[i]), i};
            } else {
                map.put(target - nums[i], i);
            }
        }
        return null;
    }
}