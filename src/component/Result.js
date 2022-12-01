import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Paper,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Table,
  TableBody,
  TableHead,
  TableRow,
  Fab,
  Dialog,
  IconButton,
  Button
} from '@material-ui/core';
import orange from '@material-ui/core/colors/orange';
import { Home, List as ListIcon, Close } from '@material-ui/icons';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import { RANGE, MONTH_RANGE } from '../constant';
import CustomTableCell from './CustomTableCell';
import Transition from './Transition';

const styles = theme => ({
  root: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 3,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingBottom: theme.spacing.unit * 6
    }
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 3,
    right: theme.spacing.unit * 2,
    opacity: 0.8
  },
  fabContainer: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    height: theme.spacing.unit * 3 + 56,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 600 + theme.spacing.unit * 2 * 2,
      left: 'auto'
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 2,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 3,
      padding: theme.spacing.unit * 3
    }
  },
  button: {
    margin: `${theme.spacing.unit}px auto`
  },
  grid: {
    textAlign: 'center'
  },
  divider: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  },
  listItem: {
    padding: `${theme.spacing.unit}px 0`
  },
  fomular: {
    color: orange[800],
    background: orange[100],
    textIndent: -theme.spacing.unit * 8,
    paddingLeft: theme.spacing.unit * 9
  },
  detail: {
    marginBottom: theme.spacing.unit * 2
  },
  tableRow: {
    height: theme.spacing.unit * 5,
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default
    }
  }
});

class Result extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    fullScreen: PropTypes.bool.isRequired,
    type: PropTypes.number.isRequired,
    result: PropTypes.object.isRequired
  };

  state = {
    open: false
  };

  handleClick = () => {
    this.props.history.push('/');
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  render() {
    const { classes, fullScreen, type, result, mode, month } = this.props;
    console.log('🚀 resultresult', result)
    const data = type === 1 ? RANGE : MONTH_RANGE;
    return (
      <main className={classes.root}>
        <div className={classes.fabContainer}>
          <Fab
            color="secondary"
            className={classes.fab}
            onClick={this.handleClick}
          >
            <Home />
          </Fab>
        </div>
        <Paper className={classes.paper} elevation={2}>
          <Grid
            container
            alignItems="center"
            justify="space-between"
            className={classes.grid}
          >
            <Grid item>
              <Typography variant="caption" gutterBottom>
                {type === 1
                  ? mode
                    ? '累计税前(元)'
                    : '年度税前(元)'
                  : '税前收入(元)'}
              </Typography>
              <Typography variant="subtitle2">{result.income}</Typography>
            </Grid>
            <Grid item>
              <Typography variant="caption" gutterBottom>
                {type === 1
                  ? mode
                    ? '累计个税(元)'
                    : '年度个税(元)'
                  : '应纳个税(元)'}
              </Typography>
              <Typography variant="subtitle2" color="secondary">
                {result.tax}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="caption" gutterBottom>
                {type === 1
                  ? mode
                    ? '累计税后'
                    : '年度税后(元)'
                  : '税后收入(元)'}
              </Typography>
              <Typography variant="subtitle2" color="primary">
                {result.afterTax}
              </Typography>
            </Grid>
          </Grid>
          {type === 1 && (
            <React.Fragment>
              <Divider className={classes.divider} />

              <List disablePadding>
                <ListItem className={classes.listItem}>
                  <ListItemText
                    primary={
                      <Typography variant="caption">
                        起征点(减除费用)
                      </Typography>
                    }
                  />
                  <Typography>{mode ? (month + 1) * 5000 : 60000}</Typography>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <ListItemText
                    primary={
                      <Typography variant="caption">
                        五险一金(个人缴纳部分)
                      </Typography>
                    }
                  />
                  <Typography>{result.totalInsurance}</Typography>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <ListItemText
                    primary={
                      <Typography variant="caption">专项抵扣</Typography>
                    }
                  />
                  <Typography>{result.additional}</Typography>
                </ListItem>
              </List>
              <Button variant="text" color="primary" onClick={this.handleOpen}>
                <ListIcon />
                查看每月收入明细
              </Button>
            </React.Fragment>
          )}
        </Paper>
        {type === 1 && (
          <Dialog
            fullScreen={fullScreen}
            fullWidth
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="month-tax"
            TransitionComponent={Transition}
          >
            <Table padding="none">
              <TableHead>
                <TableRow className={classes.tableRow}>
                  <CustomTableCell>月份</CustomTableCell>
                  <CustomTableCell>税前</CustomTableCell>
                  <CustomTableCell>当月个税</CustomTableCell>
                  <CustomTableCell>五险一金</CustomTableCell>
                  <CustomTableCell>税后</CustomTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {result.aMonthTax.map((row, idx) => (
                  <TableRow key={idx} className={classes.tableRow}>
                    <CustomTableCell>{`${idx + 1}月`}</CustomTableCell>
                    <CustomTableCell>{row.income}</CustomTableCell>
                    <CustomTableCell>{row.tax}</CustomTableCell>
                    <CustomTableCell>
                      {mode ? row.insurance : result.insurance}
                    </CustomTableCell>
                    <CustomTableCell>{row.afterTax}</CustomTableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <IconButton
              color="default"
              onClick={this.handleClose}
              className={classes.button}
            >
              <Close />
            </IconButton>
          </Dialog>
        )}
        <Typography variant="button" className={classes.detail}>
          计算详情
        </Typography>
        <Typography className={classes.fomular} variant="overline">
          {type === 1
            ? '年度个税 = （累计税前 - 累计五险一金 - 累计专项附加扣除 - 累计减除费用）× 税率 - 速算扣除数'
            : '个税 = 税前 x 税率 - 速算扣除数'}
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary={
                <Typography variant="caption">
                  {type === 1
                    ? '(累计税前-累计五险一金-累计专项扣除-累计减除费用)'
                    : '税前'}
                </Typography>
              }
            />
            <Typography>
              {type === 1
                ? (result.income - result.totalDeduction).toFixed(2)
                : result.income}
            </Typography>
          </ListItem>
          <ListItem>
            <ListItemText
              primary={<Typography variant="caption">税率</Typography>}
            />
            <Typography>{`×${result.taxRate}%`}</Typography>
          </ListItem>
          <ListItem divider>
            <ListItemText
              primary={<Typography variant="caption">速算扣除数</Typography>}
            />
            <Typography>-{result.quickDeduction}</Typography>
          </ListItem>
          <ListItem>
            <ListItemText
              primary={<Typography variant="caption">个税</Typography>}
            />
            <Typography>{result.tax}</Typography>
          </ListItem>
        </List>
        <Typography variant="button" className={classes.detail}>
          {type === 1 ? '年度个人所得税税率表' : '年终奖个人所得税率表'}
          {type !== 1 && (
            <Typography variant="caption" inline>
              （* 年终奖/12获得税率和速算数）
            </Typography>
          )}
        </Typography>

        <Table padding="none">
          <TableHead>
            <TableRow className={classes.tableRow}>
              <CustomTableCell>级数</CustomTableCell>
              <CustomTableCell>应纳税所得额</CustomTableCell>
              <CustomTableCell>税率(%)</CustomTableCell>
              <CustomTableCell>速算扣除数</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(row => (
              <TableRow key={row.id} className={classes.tableRow}>
                <CustomTableCell>{row.id}</CustomTableCell>
                <CustomTableCell>{row.income}</CustomTableCell>
                <CustomTableCell>{row.taxRate}</CustomTableCell>
                <CustomTableCell>{row.deduction}</CustomTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {type !== 1 && (
          <Typography variant="caption" className={classes.divider}>
            年终奖所得，将年终奖金额除以12个月，以每月平均收入金额来确定税率和速算扣除数
          </Typography>
        )}
      </main>
    );
  }
}

export default withMobileDialog({ breakpoint: 'xs' })(
  withStyles(styles)(Result)
);
