import type { CSSObject } from '../../_util/cssinjs';
import type { GenerateStyle } from '../../theme/internal';
import type { TableToken } from './index';

const genDashedStyle: GenerateStyle<TableToken, CSSObject> = token => {
  const { componentCls } = token;
  const tableBorder = `${token.lineWidth}px dashed ${token.tableBorderColor}`;

  return {
    [`${componentCls}-wrapper`]: {
      [`${componentCls}${componentCls}-dashed`]: {
        // ============================ Title =============================
        [`> ${componentCls}-title`]: {
          border: tableBorder,
          borderBottom: 0,
        },

        // ============================ Content ============================
        [`> ${componentCls}-container`]: {
          borderInlineStart: 'none', // Hide default container border if any

          [`
            > ${componentCls}-content,
            > ${componentCls}-header,
            > ${componentCls}-body,
            > ${componentCls}-summary
          `]: {
            '> table': {
              // ============================ Header ============================
              '> thead': {
                '> tr > th': {
                  borderBottom: 0,
                  '&:first-child': {
                    borderStartStartRadius: token.tableRadius,
                    borderEndStartRadius: token.tableRadius,
                  },
                  '&:last-child': {
                    borderStartEndRadius: token.tableRadius,
                    borderEndEndRadius: token.tableRadius,
                  },
                },
              },

              // ============================= Cell =============================
              [`
                > tbody > tr > td,
                > tfoot > tr > th,
                > tfoot > tr > td
              `]: {
                borderBottom: tableBorder,
                borderTop: 0, // Ensure no top border
                borderInlineEnd: 0, // Hide default inline end border
              },
            },
          },
        },
      },
    },
  };
};

export default genDashedStyle;
