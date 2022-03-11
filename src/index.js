// You should implement your task here.

module.exports = function towelSort(matrix) {
    return matrix
        ? matrix
              .reduce(
                  (acc, cur, index) => [
                      ...acc,
                      index % 2
                          ? cur.sort((a, b) => b - a)
                          : cur.sort((a, b) => a - b),
                  ],
                  []
              )
              .flat()
        : [];
};
