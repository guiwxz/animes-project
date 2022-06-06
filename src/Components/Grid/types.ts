export interface HTMLPatternFollowerElement {
  /**
   * Padronizando-se ao HTML, cria o ID (identificador único) para o elemento na
   * árvote de elementos do projeto.
   */
  id?: string;

  /**
   * Padronizando-se ao HTML, cria a chave do componente, por exemplo, para
   * ser utilizado em looping's.
   */
  key?: any;
}

export interface HTMLStylishElement {
  /**
   * Objeto {@interface React.CSSProperties} que cria a estilização para ser
   * aplicada sobre o componente.
   */
  style?: React.CSSProperties;
}

export interface HTMLClassifiedElement {
  /** @ignore */
  className?: string;
}

export type GridItemsAlignment = 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';

export type GridContentAlignment =
  | 'stretch'
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'space-between'
  | 'space-around';

export type GridDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';

export type GridSpacing = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export type GridJustification =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

export type GridWrap = 'nowrap' | 'wrap' | 'wrap-reverse';

export type GridSize = 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type OnClickCallback = (event?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;

export interface GridProps
  extends HTMLClassifiedElement,
    HTMLPatternFollowerElement,
    HTMLStylishElement {
  /**
   * Internamente, injeta a propriedade CSS `align-content` à
   * estilização.
   *
   * Para mais informações sobre o flexbox e esta propriedade, acesse:
   *
   * https://developer.mozilla.org/en-US/docs/Web/CSS/align-content
   *
   * Se aplica a todas as resoluções e breakpoints.
   */
  alignContent?: GridContentAlignment;

  /**
   * Internamente, injeta a propriedade CSS `align-items` à
   * estilização.
   *
   * Para mais informações sobre o flexbox e esta propriedade, acesse:
   *
   * https://developer.mozilla.org/en-US/docs/Web/CSS/align-items
   *
   * Se aplica a todas as resoluções e breakpoints.
   */
  alignItems?: GridItemsAlignment;

  /**
   * Os componentes ou elementos nativos da virtual-DOM que são
   * renderizados dentro do componente.
   */
  children?: React.ReactNode;

  /**
   * Se {true}, determina o comportamento do componente, de forma
   * interna.  O container não pode conter outro container diretamente
   * dentro da rua árvore de elementos.
   */
  container?: boolean;

  /**
   * Internamente, injea a propriedade CSS `flex-direction` à
   * estilização.
   *
   * Para mais informações sobre o flexbox e esta propriedade, acesse:
   *
   * https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction
   *
   * Se aplica a todas as resoluções e breakpoints.
   */
  direction?: GridDirection;

  /**
   * If `true`, the component will have the flex *item* behavior.
   * You should be wrapping *items* with a *container*.
   */
  item?: boolean;

  /**
   * Internamente, injeta a propriedade CSS `justify-content` à
   * estilização.
   *
   * Para mais informações sobre o flexbox e esta propriedade, acesse:
   *
   * https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content
   *
   * Se aplica a todas as resoluções e breakpoints.
   */
  justifyContent?: GridJustification;

  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `lg` breakpoint and wider screens if not overridden.
   *
   * Determina o número de grids do componente que será utilizado.  O
   * tamanho, por aqui declarado, será aplicado aos tamanhos considerados
   * "grandes" e em telas maiores, se não sobreescrito.
   *
   * O breakpoint da tela formata-se com `1280 pixels`.
   */
  lg?: boolean | GridSize;

  /**
   * Determina o número de grids do componente que será utilizado.  O
   * tamanho, por aqui declarado, será aplicado aos tamanhos considerados
   * "médios" e em telas maiores, se não sobreescrito.
   *
   * O breakpoint da tela formata-se com `960 pixels`.
   */
  md?: boolean | GridSize;

  /**
   * Determina o número de grids do componente que será utilizado.  O
   * tamanho, por aqui declarado, será aplicado aos tamanhos considerados
   * "pequenos" e em telas maiores, se não sobreescrito.
   *
   * O breakpoint da tela formata-se com `600 pixels`.
   */
  sm?: boolean | GridSize;

  /**
   * Determina o espaçamento entre os itens do grid.  O espaçamento é
   * utilizado em offset, multiplicando por 8, para cálculos internos.
   *
   * **Esta propriedade somente se aplica ao grid-container. Caso passado
   * para o item, esta propriedade será ignorada.**
   */
  spacing?: GridSpacing;

  /**
   * Internamente, aplica-se a propriedade `flex-wrap`, aplicada em todas
   * as dimensões de telas.
   *
   * Para mais informações, acesse:
   *
   * https://developer.mozilla.org/pt-BR/docs/Web/CSS/flex-wrap
   */
  wrap?: GridWrap;

  /**
   * Determina o número de grids do componente que será utilizado.  O
   * tamanho, por aqui declarado, será aplicado aos maiores tamanhos
   * de tela.
   *
   * Considere utilizar um valor de 1 a 12.
   *
   * O breakpoint da tela formata-se com `1920 pixels`.
   */
  xl?: boolean | GridSize;

  /**
   * Determina o número de grids do componente que será usado.  O
   * tamanho, por aqui declarado, será aplicado aos menores tamanhos
   * de tela.
   *
   * Considere utilizar um valor de 1 a 12.
   */
  xs?: boolean | GridSize;

  /**
   * If `true`, it sets `min-width: 0` on the item.
   * Refer to the limitations section of the documentation to better understand the use case.
   *
   * @deprecated É obsoleto no código interno do componente.  Poderá ser removidos dentro de algumas versões.
   */
  zeroMinWidth?: boolean;

  /**
   * Callback que é disparado pelo evento quando o usuário
   * clicar sobre o grid.
   *
   * @param event Evento disparado, originário do listener.
   */
  onClick?: OnClickCallback;
}
