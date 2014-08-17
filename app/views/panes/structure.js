global.Panes.Structure = global.Pane.extend({

  renderTab: function(rows, indexes) {
    //console.log('global.Panes.Structure#renderTab');
    //console.log(rows);
    //console.log(indexes);
    this.renderViewToPane('structure', 'structure_tab', {rows: rows, indexes: indexes});
    $u(this.content.find('table')).colResizable();
  },

  addColumnForm: function () {
    new Dialog.NewColumn(this.handler);
  },

  addIndexForm: function () {
    new Dialog.NewIndex(this.handler);
  },

  editColumn: function (column_name) {
    new Dialog.EditColumn(this.handler, column_name);
  },
});