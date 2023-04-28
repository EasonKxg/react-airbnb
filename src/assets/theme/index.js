const theme = {
  color: {
    primaryColor: "#ff385c",
    secondaryColor: "#00848A",
  },
  text: {
    primaryColor: "#484848",
    secondaryColor: "#222",
  },
  mixin: {
    boxShadow: `
      transition: box-shadow 200ms ease;
      &:hover {
        box-shadow: 0 2px 4px rgba(0,0,0,.18);
      }
    `,
    lineBottom: ` border-bottom: 1px solid #ddd;`,
    // 文本溢出
    ellipsis: `
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;`,
  },
};

export default theme;
