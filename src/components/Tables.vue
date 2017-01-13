<!-- Row starts -->
<template>
					<div class="row gutter">
						<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
							<div class="panel panel-red">
								<div class="panel-heading">
									<h4>Table with Graphs</h4>
								</div>
								<div class="panel-body">
									<div class="table-responsive">
										<table class="table table-bordered no-margin">
											<thead>
												<tr>
													<th>Country</th>
													<th>Sessions</th>
													<th>New Users</th>
													<th>Bounce Rate</th>
													<th>Sessions</th>
													<th>Goal Value</th>
													<th>Trend Graph</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>&nbsp;</td>
													<td><br>74<br><small class="text-dark-blue">% of Total:<br>80.00% (10)</small></td>
													<td><br>57%<br><small class="text-dark-blue">Avg for View:<br>90.00% (-16.67%)</small></td>
													<td><br>32%<br><small class="text-dark-blue">Avg for View:<br>50.00% (70.00%)</small></td>
													<td><br>35.32<br><small class="text-dark-blue">Avg for View:<br>2.70 (75.93%)</small></td>
													<td><br>79<br><small class="text-dark-blue">Avg for View:<br>0.00% (0.00%)</small></td>
													<td><br>USD$88.99<br><small class="text-dark-blue">% of Total:<br>0.00% US$98.00)</small></td>
												</tr>
												<tr>
													<td>1. USA</td>
													<td>327</td>
													<td>229</td>
													<td>1839</td>
													<td>%21</td>
													<td>USD 980</td>
													<td>
														<span id="rowOne"></span>
													</td>
												</tr>
												<tr>
													<td>2. India</td>
													<td>$32,578</td>
													<td>$21,375</td>
													<td>$89,319</td>
													<td>%46</td>
													<td>USD 887</td>
													<td>
														<span id="rowTwo"></span>
													</td>
												</tr>
												<tr>
													<td>3. Australia</td>
													<td>$21.26</td>
													<td>$18.45</td>
													<td>%68</td>
													<td>%16</td>
													<td>USD 685</td>
													<td>
														<span id="rowThree"></span>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
</template>
<script>
export default {
  name: 'tables'
}
